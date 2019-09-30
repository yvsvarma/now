package testcases;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import core.Base;

public class tests extends Base {
	
	static Logger log = LogManager.getLogger(tests.class.getName());
	
	

	@BeforeTest
	public void beforeTest() throws IOException {
	
			driver =initializeDriver();
   			launchUrl(prop.getProperty("url"));

	}
	
	@Test
	public void tc1_sortable() {

		
		
	}

}
