package SeleniumTests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FirstSeleniumTest {
	public static void main(String[] args) {
		
		String projectLocation = System.getProperty("user.dir");
		
		System.setProperty("webdriver.gecko.driver", projectLocation + "/lib/geckodriver/geckodriver");
		System.setProperty("webdriver.firefox.bin", "/Applications/Firefox.app/Contents/MacOS/firefox-bin");
		
		WebDriver driver = new FirefoxDriver();
		
		driver.get("http://seleniumhq.org/");
		driver.quit();
	}
}
