DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS industry;

CREATE TABLE industry (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE job (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(500) NOT NULL,
  pay_rate VARCHAR(10) NOT NULL,
  industry_id INT NOT NULL,
  INDEX ind_ind (industry_id),
  CONSTRAINT fk_industry FOREIGN KEY (industry_id) REFERENCES industry(id) ON DELETE CASCADE
);

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(30) NOT NULL,
  phone_number VARCHAR(15),
  INDEX phone_ind (phone_number),
  account_type BOOLEAN,
  job_id INT,
  INDEX job_ind (job_id),
  CONSTRAINT fk_job FOREIGN KEY (job_id) REFERENCES job(id) ON DELETE CASCADE
);

