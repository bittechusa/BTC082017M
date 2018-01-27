package com.bit;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class Step1Test 
{
	WebDriver dr;
	@Given("^open browser$")
	public void open_browser(DataTable arg1) throws Throwable {
	   List<List<String>> datas= arg1.raw();
	  String s= datas.get(0).get(0);
	  if(s.equals("chrome")) {
			
			System.setProperty("webdriver.chrome.driver", "/Users/bittechconsulting/Downloads/chromedriver");
			dr = new ChromeDriver();
		}
		else if(s.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", "/Users/bittechconsulting/Downloads/geckodriver");
			dr = new FirefoxDriver();
			System.out.println("samiul");
		}
		else if(s.equals("ie")) {
			System.setProperty("webdriver.ie.driver", "/Users/bittechconsulting/Downloads/iedriver");
			dr = new FirefoxDriver();
		}
	}

	@Given("^nevigate to url$")
	public void nevigate_to_url() throws Throwable {
	    
	}



}
