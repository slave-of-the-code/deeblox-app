import { AboutUs_Data } from './aboutUs.data';
import { Jobs_Data } from './jobs.data';
import { Contact_Data } from './contact.data';

const data = {
  pages: {
    aboutUs: AboutUs_Data,
    jobs: Jobs_Data,
    contact: Contact_Data
  }
};

export const Data = {
  AboutUs: data.pages.aboutUs,
  Jobs: data.pages.jobs,
  Contact: data.pages.contact
};
