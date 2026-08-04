import {
  Arg,
  Authorized,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { db } from "../db";
import { Contact } from "../entities/Contact";
import { sendPortfolioContactEmail } from "../services/contactEmail";

@InputType()
class NewContactInput implements Partial<Contact> {
  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  message: string;
}

@Resolver(Contact)
class ContactResolver {
  private async notifyByEmail(contact: Contact) {
    try {
      await sendPortfolioContactEmail({
        name: contact.name,
        lastname: contact.lastname,
        email: contact.email,
        message: contact.message,
      });
    } catch (error) {
      console.error("Portfolio contact email was not sent:", error);
    }
  }

  @Query(() => [Contact])
  async getAllContacts() {
    const contacts = await Contact.find();
    return contacts;
  }

  @Mutation(() => Contact)
  async addContact(
    @Arg("name") name: string,
    @Arg("lastname") lastname: string,
    @Arg("email") email: string,
    @Arg("message") message: string
  ): Promise<Contact> {
    const contact = Contact.create({ name, lastname, email, message });
    await contact.save();
    await this.notifyByEmail(contact);
    return contact;
  }

  @Query(() => [Contact])
  async contacts() {
    return await db.getRepository(Contact).find();
  }

  @Mutation(() => Contact)
  async createNewContact(@Arg("data") newContactData: NewContactInput) {
    const resultFromSave = await Contact.save({
      ...newContactData,
    });
    await this.notifyByEmail(resultFromSave);

    return resultFromSave;
  }

  @Query(() => Contact)
  async getOneContactById(@Arg("contactId") contactId: string) {
    const contact = await Contact.findOne({});
    return contact;
  }
}

export default ContactResolver;
