from selenium import webdriver
import time 
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome("/chromedriver.exe") 
driver.get("http://localhost:3000/")
time.sleep(2)


toLogin=WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.PARTIAL_LINK_TEXT, "Login")))
toLogin.click()
time.sleep(2)

emailInput = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/switch/div/form/input[1]')
emailInput.send_keys('studenttt@g.com')
passwordInput = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/switch/div/form/input[2]')
passwordInput.send_keys('Tunahan29!')
driver.find_element(By.XPATH, '//*[@id="root"]/div/div/switch/div/form/button').click()
time.sleep(1)
driver.find_element(By.XPATH, '//*[@id="link"]').click()
time.sleep(1)
announcementSearch=driver.find_element(By.XPATH, '//*[@id="outlined-basic"]')
announcementSearch.send_keys("evryone")

