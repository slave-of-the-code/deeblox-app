import { AboutUs_Data } from './aboutUs.data';
import { Jobs_Data } from './jobs.data';
import { Contact_Data } from './contact.data';

const data = {
  socialNetwork: {
    urlFacebook: 'wwww.facebook.com',
    urlTwitter: 'wwww.twitter.com',
    urlInstagram: 'wwww.instagram.com',
    urlYoutube: 'wwww.youtube.com'
  },
  pages: {
    aboutUs: AboutUs_Data,
    jobs: Jobs_Data,
    contact: Contact_Data
  }
};

export const Data = {
  SocialNetwork: data.socialNetwork,
  AboutUs: data.pages.aboutUs,
  Jobs: data.pages.jobs,
  Contact: data.pages.contact
};
