import { CepreunaPage } from './app.po';

describe('cepreuna App', () => {
  let page: CepreunaPage;

  beforeEach(() => {
    page = new CepreunaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
