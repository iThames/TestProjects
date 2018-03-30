package SeleniumTests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FirstSeleniumTest {
	public static void main(String[] args) {
		
		String projectLocation = System.getProperty("user.dir");
		
		//System.setProperty("webdriver.gecko.driver", projectLocation + "/lib/geckodriver/geckodriver");
		//System.setProperty("webdriver.firefox.bin", "/Applications/Firefox.app/Contents/MacOS/firefox-bin");
		//WebDriver driver = new FirefoxDriver();
		
		System.setProperty("webdriver.chrome.driver", projectLocation + "/lib/chromedriver/chromedriver");		
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://seleniumhq.org/");
		driver.quit();
	}
}
