INSERT INTO industry (name)
VALUES
	('painting'),
  ('plumbing'),
  ('electrical'),
  ('carpentry');
  
INSERT INTO job (title, description, pay_rate, industry_id)
VALUES
	('Painter Needed', 'We need a painter to touch up our home', '$300', 1),
  ('Plumber ASAP', 'Our toilets are backed up and so are we! Please help!', '$500', 2),
  ('Sparks are flying!', 'My husband tried to repair the fusebox by himself! Rewire needed!', '$200', 3),
  ('Dining Room disaster', 'My kitchen table just broke in half! Need repair or replacement!', '$150', 4);
  
INSERT INTO user (first_name, last_name, username, email, password, phone_number, account_type, job_id)
VALUES
	('Jim', 'Beam', 'WhiskeyRokker', 'whiskeyrokker@gmail.com', 'password', '(555)867-5309', 1, null),
  ('Jack', 'Daniels', 'WhiskeyKing', 'whiskeyking@gmail.com', 'password', '(555)114-4188', 1, null),
  ('Jose', 'Cuervo', 'TequilaSilencio', 'tequilasilencio@gmail.com', 'password', '(555)555-7777', 1, null),
  ('Johnny', 'Carson', 'RIPLateNightTS', 'riplatenightts@gmail.com', 'password', '(555)113-4666', 1, null),
  ('Johnny', 'Knoxville', 'Jacka$$69', 'jacka$$69@gmail.com', 'password', '(555)609-6969', 0, 1),
  ('Jack', 'Osborne', 'OzzysKid', 'ozzyskid@gmail.com', 'password', '(555)666-1134', 0, 2),
  ('Jim', 'Davis', 'Ih8Mondays', 'ih8mondays@gmail.com', 'password', '(555)555-6369', 0, 3),
  ('Joey', 'Tribbiani', 'MegaStar94', 'megastar94@gmail.com', 'password', '(555)123-4321', 0, 4),
  ('Johnny', 'Quest', 'JQuestBandit', 'jquestbandit@gmail.com', 'password', '(555)627-1962', 0, null);