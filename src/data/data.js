import { AboutUs_Data } from './aboutUs.data';
import { Jobs_Data } from './jobs.data';
import { Contact_Data } from './contact.data';
import { Header_Data } from './header.data';
import { Footer_Data } from './footer.data';

const data = {
  socialNetwork: {
    urlFacebook: 'https://www.facebook.com/',
    urlTwitter: 'https://www.twitter.com',
    urlInstagram: 'https://www.instagram.com',
    urlYoutube: 'https://www.youtube.com'
  },
  pages: {
    aboutUs: AboutUs_Data,
    jobs: Jobs_Data,
    contact: Contact_Data
  },
  shared: {
    header: Header_Data,
    footer: Footer_Data
  }
};

export const Data = {
  SocialNetwork: data.socialNetwork,
  AboutUs: data.pages.aboutUs,
  Jobs: data.pages.jobs,
  Contact: data.pages.contact,
  Header: data.shared.header,
  Footer: data.shared.footer
};
