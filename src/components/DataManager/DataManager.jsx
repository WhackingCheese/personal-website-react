import { createContext } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { BsTelephoneFill, BsEnvelope, BsGithub, BsLinkedin, BsGlobe2, BsInstagram, BsFacebook } from 'react-icons/bs';
import routes from '../../assets/data/routes.json';
import references from '../../assets/data/references.json';
import jobs from '../../assets/data/jobs.json';
import education from '../../assets/data/education.json';
import experience from '../../assets/data/experience.json';
import info from '../../assets/data/info.json';
import footer from '../../assets/data/footer.json';
import index from '../../assets/data/index.json';
import courses from '../../assets/data/courses.json';
import general from '../../assets/data/general.json';
import projects from '../../assets/data/projects.json';
import notfound from '../../assets/data/notfound.json';
import about from '../../assets/data/about.json';

const links = {
  'person': {'text': '17.09.1999', 'icon': IoPersonSharp},
  'phone': {'text': '857-2287', 'href': 'tel:8572287', 'icon': BsTelephoneFill},
  'email': {'text': 'mikolaj.cymcyk@gmail.com', 'href': 'mailto:mikolaj.cymcyk@gmail.com', 'icon': BsEnvelope},
  'github': {'text': 'WhackingCheese', 'href': 'https://github.com/whackingcheese', 'icon': BsGithub},
  'linkedin': {'text': 'Mikolaj Cymcyk', 'href': 'https://www.linkedin.com/in/mikolajcymcyk', 'icon': BsLinkedin},
  'website': {'text': 'www.mikkicym.com', 'href': 'https://www.mikkicym.com', 'icon': BsGlobe2},
  'instagram': {'text': 'storostur', 'href': 'https://www.instagram.com/mikkicym/', 'icon': BsInstagram},
  'facebook': {'text': 'Mikolaj Cymcyk', 'href': 'https://www.facebook.com/Mikolaj.Cymcyk/', 'icon': BsFacebook}
}

const data = {
  'routes': routes.routes,
  'references': references,
  'jobs': jobs,
  'education': education,
  'experience': experience,
  'info': info,
  'links': links,
  'footer': footer,
  'index': index,
  'courses': courses,
  'general': general,
  'projects': projects,
  'notfound': notfound,
  'about': about
};

const DataContext = createContext();

function DataManager(props) {
  return (
    <DataContext.Provider value={[data]}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataManager, DataContext };
