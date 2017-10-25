import { PagesjaunesTNPage } from './app.po';

describe('pagesjaunes-tn App', () => {
  let page: PagesjaunesTNPage;

  beforeEach(() => {
    page = new PagesjaunesTNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
