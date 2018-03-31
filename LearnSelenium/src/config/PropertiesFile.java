package config;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

import SeleniumTests.FirstSeleniumTest;

public class PropertiesFile {
	static Properties prop = new Properties();
	static String projectLocation = System.getProperty("user.dir");
	
	public static void main(String[] args) {
		readPropertiesFile();
		writePropertiesFile();
		readPropertiesFile();
	}

	public static void readPropertiesFile() {
		try {

			InputStream input = new FileInputStream(projectLocation + "/src/config/config.properties");
			prop.load(input);
			FirstSeleniumTest.browser = prop.getProperty("browser");
			System.out.println(FirstSeleniumTest.browser);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void writePropertiesFile() {
		try {
			
			OutputStream output = new FileOutputStream(projectLocation + "/src/config/config.properties");
			prop.setProperty("result", "pass");
			prop.store(output, null);
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
