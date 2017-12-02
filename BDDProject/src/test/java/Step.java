import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step
{
	Base bp;
	HomePage hp;
	WomenPage wp;
	
	@Before
	public void before()
	{
		System.out.println("b");
	}
	@After
	public void after()
	{
		System.out.println("a");
	}
	@Before("@smoke")
	public void before1()
	{
		System.out.println("b1");
	}
	@After("@smoke")
	public void after1()
	{
		System.out.println("a1");
	}
	
	
	@Given("^i  nevigate to url$")
	public void i_nevigate_to_url() throws Throwable {
	   bp=new Base();
	  hp= bp.openBrowser();
	}

	@When("^I click on women link$")
	public void i_click_on_women_link() throws Throwable {
	   wp= hp.clickWomen();
	}

	@When("^click on first product$")
	public void click_on_first_product() throws Throwable {
	
	}

	@When("^select on size$")
	public void select_on_size() throws Throwable {
	  
	}

	@When("^click buy now$")
	public void click_buy_now() throws Throwable {
	    
	}

	@Then("^i should be in checkout page$")
	public void i_should_be_in_checkout_page() throws Throwable {
	    bp.dr.quit();
	}

	@When("^I click on man link$")
	public void i_click_on_man_link() throws Throwable {
	    System.out.println("man");
	}

}
