import { createContext } from 'react';
import {IoPersonSharp} from 'react-icons/io5';
import { BsTelephoneFill, BsEnvelope, BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs';
import routes from '../../assets/data/routes.json';
import references from '../../assets/data/references.json';
import jobs from '../../assets/data/jobs.json';
import education from '../../assets/data/education.json';
import experience from '../../assets/data/experience.json';
import info from '../../assets/data/info.json';

const links = {
  'person': {'text': '170999-3479', 'icon': IoPersonSharp},
  'phone': {'text': '857-2287', 'href': 'tel:8572287', 'icon': BsTelephoneFill},
  'email': {'text': 'mikolaj.cymcyk@gmail.com', 'href': 'mailto:mikolaj.cymcyk@gmail.com', 'icon': BsEnvelope},
  'github': {'text': 'WhackingCheese', 'href': 'https://github.com/whackingcheese', 'icon': BsGithub},
  'linkedin': {'text': 'Mikolaj Cymcyk', 'href': 'https://www.linkedin.com/in/mikolajcymcyk', 'icon': BsLinkedin},
  'website': {'text': 'www.mikolajcymcyk.com', 'href': 'https://www.mikolajcymcyk.com', 'icon': BsGlobe2}
}

const data = {
  'routes': routes.routes,
  'references': references,
  'jobs': jobs,
  'education': education,
  'experience': experience,
  'info': info.info,
  'links': links
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
