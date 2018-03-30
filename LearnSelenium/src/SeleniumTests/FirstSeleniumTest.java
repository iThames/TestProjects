package SeleniumTests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FirstSeleniumTest {
	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
		
		driver.get("http://seleniumhq.org/");
		driver.quit();
	}
}
