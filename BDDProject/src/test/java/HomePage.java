import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class HomePage 
{
	ChromeDriver dr;
	HomePage(ChromeDriver dr)
	{
		this.dr=dr;
	}
	public WomenPage clickWomen()
	{
		dr.findElement(By.xpath("")).click();
		return new WomenPage();
	}

}
