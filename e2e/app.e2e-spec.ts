import { CoffeeNgPage } from './app.po';

describe('coffee-ng App', function() {
  let page: CoffeeNgPage;

  beforeEach(() => {
    page = new CoffeeNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
