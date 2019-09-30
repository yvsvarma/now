package core;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


public class Base {
	
	static Logger log = LogManager.getLogger(Base.class.getName());
	
	
	public static WebDriver driver;
	public Properties prop;
	public WebDriver initializeDriver() throws IOException {
		 prop= new Properties();
		 String file="src/main/java/resources/config.properties";
		 FileInputStream fis=new FileInputStream(file);
		 prop.load(fis);
		 String browserName=prop.getProperty("browser");
		 log.info(browserName);
		
		 if(browserName.equals("chrome")) {
				System.setProperty("webdriver.chrome.driver","src/main/java/resources/drivers/chromedriver");

			 driver=new ChromeDriver();
			 log.info("Selected Chrome browser");
		 
		 }
		 else if (browserName.equals("firefox"))
		 {
		 	 driver= new FirefoxDriver();
			 log.info("Selected Firefox browser");

		 }
		 else if (browserName.equals("IE"))
		 {
		 	 driver= new InternetExplorerDriver();
			 log.info("Selected Internet Explorer browser");

		 }
		 else if (browserName.equals("safari"))
		 {
		 	 driver= new InternetExplorerDriver();
			 log.info("Selected Safari browser");

		 }
		 
		return driver;
	}
	
	public void launchUrl(String url) {
		driver.get(url);
	}
	

}
