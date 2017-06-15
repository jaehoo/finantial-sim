import { SimulatorFrontendPage } from './app.po';

describe('simulator-frontend App', () => {
  let page: SimulatorFrontendPage;

  beforeEach(() => {
    page = new SimulatorFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
