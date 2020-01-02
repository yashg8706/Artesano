<html lang="en">
	<head>
        <meta charset="utf-8">
            <title>Artesano</title>
            <script type="text/javascript" src="../JS/jquery-3.3.1.js"></script>   
            <link rel="stylesheet" type="text/css" href="../css/eventsBooking.css" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Tangerine" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
        <body>    
            <div class="background">
                    <div class="transbox">
                            <p id="year">Est. 1918</p>
                            <header id="header">
                                    <div class="container">
                                             <i class="fa fa-facebook fa-2x"></i>
                                             <i class="fa fa-twitter fa-2x"></i>
                                             <i class="fa fa-instagram fa-2x"></i>
                                    </div>
                                 <div id="logo">
                                        <img src="../images/logo.png" alt="Artesano Logo" width="10%" height="10%">
                                    </div>
                            </header>

                <div class="allDropDowns">
                    <div class="dropdown">
                        <a href="../index.php"><button class="dropbtn">Home</button></a>
                        </div>
                <div class="dropdown">
                        <a href="aboutUs.php"><button class="dropbtn">About Us</button></a>
                        <div class="dropdown-content">
                          <a href="contactUs.php">Contact Us</a>
                          <a href="locations.php">Locations</a>
                          <a href="careers.php">Careers</a>
                          <a href="sitemap.php">Site Map</a>
                        </div>
                      </div>
                      <div class="dropdown">
                            <a href="menu.php"><button class="dropbtn">Menu</button></a>
                            <div class="dropdown-content">
                              <a href="specials.php">Specials</a>
                            </div>
                          </div>
                          <div class="dropdown">
                                <a href="eventsBooking.php"><button class="dropbtn">Events/Booking</button></a>
                                <div class="dropdown-content">
                                  <a href="contest1.php">Contest</a>
                                  <a href="giftCards.php">Gift Cards</a>
                                </div>
                              </div>
            
                            </div>
                            </div>
                        </div>
                      
                        <div class="transbox">
                                <h1><span id="celebrate">Celebrate</span> With Us!</h1>
                                <h2>To get started, click on the button below:</h2>
                            <!--enter your content here-->
                            <h3><button class="dropbtn">Book Now:</button></h3>
        
                            <div>
                                <form action="#" method="post" id="eventForm" name="myEvent">
                                 
                                
                                   
                                    <label for="Name">First Name:</label> 
                                        <input type="text" id="firstName" name="fName" placeholder="e.g. Tyvon"/>
                                        <label for="cName">Last Name:</label> 
                                        <input type="text" id="lastName" name="lName" placeholder="e.g. Simpson"/>
                                    
                                    <label  for="cEmail">Email:</label>
                                        <input type="text" id="clientEmail" name="cEmail" placeholder="e.g. simpson@live.ca"/>
                                    
                                    <label for="cPhone">Phone:</label> 
                                    <input type="text" id="clientPhone" name="clientPhone" placeholder="(123) 456-7890"/>
                                    
                                     <label for="Location">Location:</label>
                                    <select id="resLocation" name="Resturant location">
                                       <option value="">- Please Select -</option>
                                        <option value="">King</option>
                                       <option value="">Niagara</option>
                                       <option value="">Vaughan</option>
                                       </select>
                                    
                                   <label for="guest">Number of Guest(s):</label>
                                    <select id="guestAmount" name="Number of Guest">
                                       <option value="">- Please Select -</option>
                                        <option value="">1</option>
                                       <option value="">2-4</option>
                                       <option value="">6-8</option>
                                       <option value="">8-10</option>
                                       <option value="">12</option>
                                    </select>
                        
                                    <div id="eventDate">
                                            <label id="bookDate" for="booking-date">Choose a date:</label>
                                            <input type ="date" name="eventDate">
                                            <br>
                                        </div>
                                        <div id="eventTime">
                                        
                                            <label id="bookTime" for="booking-time">Choose a time:</label>
                                            <input type="time" name="eventDate" min=11:00 max=12:00>
                                            <br>
                                            <!-- Business hours are between 11:00-12:30 AM -->
                                         </div>
                                   
                                    <input type="submit" class="submit" value="Submit Booking!">
                                    <br>
                                    
                                    <div id="confirmBookingMsg">
                                            <h4>Thank you for booking with us!</h4>
                                            
                                        </div>
                                        <div id="errorMsg">
                                            <h5>Error!</h5>
                                        </div>
                                               
                                  </form>
                            </div>
                                    


                        </div>
                        
                                               
                                       
                                    
                                  
                        
                <script type="text/javascript" src="../JS/eventsBooking.js"></script> 
            <footer>
                &copy; Programming Guru's, 2018.
            </footer>
        </body>
</html>