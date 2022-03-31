INSERT INTO industry (name)
VALUES
	('Painting'),
  ('Plumbing'),
  ('Electrical'),
  ('Carpentry');
  
INSERT INTO user (first_name, last_name, username, email, password, phone_number, account_type)
VALUES
	('Jim', 'Beam', 'WhiskeyRokker', 'whiskeyrokker@gmail.com', 'password', '(555)867-5309', 1),
  ('Jack', 'Daniels', 'WhiskeyKing', 'whiskeyking@gmail.com', 'password', '(555)114-4188', 1),
  ('Jose', 'Cuervo', 'TequilaSilencio', 'tequilasilencio@gmail.com', 'password', '(555)555-7777', 1),
  ('Johnny', 'Carson', 'RIPLateNightTS', 'riplatenightts@gmail.com', 'password', '(555)113-4666', 1),
  ('Johnny', 'Knoxville', 'Jacka$$69', 'jacka$$69@gmail.com', 'password', '(555)609-6969', 0),
  ('Jack', 'Osborne', 'OzzysKid', 'ozzyskid@gmail.com', 'password', '(555)666-1134', 0),
  ('Jim', 'Davis', 'Ih8Mondays', 'ih8mondays@gmail.com', 'password', '(555)555-6369', 0),
  ('Joey', 'Tribbiani', 'MegaStar94', 'megastar94@gmail.com', 'password', '(555)123-4321', 0),
  ('Johnny', 'Quest', 'JQuestBandit', 'jquestbandit@gmail.com', 'password', '(555)627-1962', 0);
  
INSERT INTO job (title, description, pay_rate, user_id, industry_id)
VALUES
	('Painter Needed', 'We need a painter to touch up our home', '$300', 1, 1),
  ('Plumber ASAP', 'Our toilets are backed up and so are we! Please help!', '$500', 2, 2),
  ('Sparks are flying!', 'My husband tried to repair the fusebox by himself! Rewire needed!', '$200', 3, 3),
  ('Dining Room disaster', 'My kitchen table just broke in half! Need repair or replacement!', '$150', 4, 4);
