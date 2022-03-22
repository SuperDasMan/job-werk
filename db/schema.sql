DROP TABLE IF EXISTS industry;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS user;

CREATE TABLE industry (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE job (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(500) NOT NULL,
  pay_rate INT NOT NULL,
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
  account_type BOOLEAN,

  INDEX job_ind (job_id),
  CONSTRAINT fk_job FOREIGN KEY (job_id) REFERENCES job(id) ON DELETE CASCADE,
  manager_id INT,
  INDEX manager_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

