import { StuAppPage } from './app.po';

describe('stu-app App', function() {
  let page: StuAppPage;

  beforeEach(() => {
    page = new StuAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
