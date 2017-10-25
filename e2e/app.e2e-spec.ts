import { WordpressVersionFEPage } from './app.po';

describe('wordpress-version-fe App', () => {
  let page: WordpressVersionFEPage;

  beforeEach(() => {
    page = new WordpressVersionFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
