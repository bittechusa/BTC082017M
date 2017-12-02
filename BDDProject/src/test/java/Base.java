import org.openqa.selenium.chrome.ChromeDriver;

public class Base 
{
	ChromeDriver dr;
	public HomePage openBrowser()
	{

		System.setProperty("webdriver.chrome.driver", "/Users/bittechconsulting/Downloads/chromedriver");
		dr = new ChromeDriver();
		dr.get("http://www.eshopper24.com");
		return new HomePage(dr);
	}

}
