package SeleniumTests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FirstSeleniumTest {

	static String browser;
	static WebDriver driver;
	
	public static void main(String[] args) {
		setBrowser();
		setBrowserConfig();
		runTest();		
	}

	//SetBrowser
	//SetBrowserConfig
	//runTest

	/**
	 * Description
	 * @author Muppaneni
	 * @date
	 */
	public static void setBrowser() {
		browser = "Chrome";
	}

	public static void setBrowserConfig() {
		String projectLocation = System.getProperty("user.dir");
		
		//this condition block sets config for firefox browser
		if(browser.contains("Firefox")) {
			System.setProperty("webdriver.gecko.driver", projectLocation + "/lib/geckodriver/geckodriver");
			System.setProperty("webdriver.firefox.bin", "/Applications/Firefox.app/Contents/MacOS/firefox-bin");
			driver = new FirefoxDriver();
		}

		if(browser.contains("Chrome")) {
			System.setProperty("webdriver.chrome.driver", projectLocation + "/lib/chromedriver/chromedriver");		
			driver = new ChromeDriver();
		}
	}

	public static void runTest() {
		driver.get("http://seleniumhq.org/");
		driver.quit();
	}
}
