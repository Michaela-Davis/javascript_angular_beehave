import { BeehavePage } from './app.po';

describe('beehave App', function() {
  let page: BeehavePage;

  beforeEach(() => {
    page = new BeehavePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
