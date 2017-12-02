package bddcucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefination {
	
	public WebDriver driver;

//	@Given("^I nevigate to url$")
//	public void i_nevigate_to_url() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		System.setProperty("webdriver.chrome.driver", "/Users/samiulislam/Downloads/chromedriver");
//		driver = new ChromeDriver();
//		driver.get("http://www.facebook.com");
//	    
//	}
//
//	@When("^I entered user and password$")
//	public void i_entered_user_and_password() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
////		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("arg1");
////		driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys("arg1");
//	    
//	}
//
//	@When("^I click login$")
//	public void i_click_login() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		driver.findElement(By.xpath(".//*[@id='loginbutton']")).click();
//	    
//	}
//
//	@Then("^I should be in login page$")
//	public void i_should_be_in_login_page() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    System.out.println("Successfully Facebook Lgin");
//	}
	
	@Given("^I nevigate to url$")
	public void i_nevigate_to_url() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "/Users/samiulislam/Downloads/chromedriver");
		driver = new ChromeDriver();
		driver.get("http://www.facebook.com");
	    
	}

	@When("^I entered \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void i_entered_and_password(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys(arg1);
		driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys(arg2);
	    
	}

	@When("^I click login$")
	public void i_click_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath(".//*[@id='loginbutton']")).click();
	    
	}

	@Then("^I should be in login page$")
	public void i_should_be_in_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	
}
