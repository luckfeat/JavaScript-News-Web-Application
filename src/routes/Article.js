import Component from '../core/component';
import { Detail } from '../components';
import { getNewsDetail } from '../core/api/newsApi';

export default class Article extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  // eslint-disable-next-line class-methods-use-this
  async initialize() {
    // eslint-disable-next-line no-restricted-globals
    const articleDetail = await getNewsDetail(history.state.title);
    this.root.appendChild(new Detail(articleDetail).render('section', 'article'));
  }
}