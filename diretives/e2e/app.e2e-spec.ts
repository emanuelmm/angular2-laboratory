import { DiretivesPage } from './app.po';

describe('diretives App', function() {
  let page: DiretivesPage;

  beforeEach(() => {
    page = new DiretivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
