import React, { useState, useEffect } from "react";
import aboutIcon from "./about.svg";
import MovieCard from "./moviecard";
import SearchIcon from "./search.svg";
import playIcon from "./play.svg";
import "./App.css";
import trailerIcon from "./trailer.svg"
import favIcon from "./fav.svg"


const API_URL = " https://www.omdbapi.com?apikey=46bc7d4f";
var Tv = 'https://teraboxapp.com/s/';
var Tr = 'https://www.youtube.com/watch?v='

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
  const [eTv, seteTv] = useState("");
  const [selectedtrailertitle,setselectedtrailertitle]=useState("");
  const [eTr,seteTr] = useState("");
  

  useEffect(() => {
    searchMovies("Batman");
  }, []);

 useEffect(() => {
    console.log(selectedMovieTitle)
     seteTv(selectedMovieTitle === "John Wick: Chapter 2" ? "1ZE7mDgUxoRfkVMcxcv-ZM" :
     selectedMovieTitle === "John Wick" ? "1N6maL5nmIRAYCT9o2koWjw ":
     selectedMovieTitle === "The Voyeurs" ? "13RDIVLaaXqYGsUTUzBzi9w": 
     selectedMovieTitle === "John Wick: Chapter 3" ? "1nbbou3T349XCV9JrjCdb0A":
     selectedMovieTitle === "John Wick: Chapter 4" ? "1wthQiExqkaQpZuyyCeStPg":
     selectedMovieTitle === "Fifty Shades Freed" ? "1NKFv8Kn0iyjk4Z7VOl7m-g ":
     selectedMovieTitle === "Batman Begins" ? "1vxpWydCZ-C7YNRqtqAdGSA":
     selectedMovieTitle === "The Dark Knight" ? "1PYI6Td2rp2seMqPuNjhz6w ":
     selectedMovieTitle === "The Dark Knight Rises" ? "1-PrxXSbpncixkN09oBg23w":
     selectedMovieTitle === "Batman v Superman: Dawn of Justice" ? "1WlyuZarZqRRV2MRktiFo_w":
     selectedMovieTitle === "The Batman" ? "1tXuV4WjVTM8L-oST-gyl7g":
     selectedMovieTitle === "The Wolf of Wall Street" ? "14SE-i7ZGUX3lBENQjsxnYA":
     selectedMovieTitle === "Interstellar" ? "1PWNt8YgxZn5qTcvhr00VcA":
     selectedMovieTitle === "Inception" ? "1D6mk29FgLb03QcXF7a6y1g":
     selectedMovieTitle === "The Avengers" ? "1DRNtu894dB5c4xVtKp7pMg ":
     selectedMovieTitle === "Avengers: Age of Ultron" ? "1WcYLH8xtBICxQEic4L8kjA":
     selectedMovieTitle === "Avengers: Infinity War" ? "1jgb-49TztHWjy2JhXGwiXA":
     selectedMovieTitle === "Avengers: Endgame" ? "1KOMCGARCp4I4EGGKAQdvTA":
     selectedMovieTitle === "Ananse: Spider Man 1" ? "1Wm7Yh3JJcfHeu2-BIJq6Wg":
     selectedMovieTitle === "Spider-Man 2" ? "1rqLjQOV_O1QYJM0JnY-geg":
     selectedMovieTitle === "Spider-Man 3" ? "1AY0C-_pglp0_vKJQnKQ_hQ":
     selectedMovieTitle === "The Amazing Spider-Man" ? "1a-Ndq0FrWAfIS6D7awGqVQ":
     selectedMovieTitle === "Spider-Man: Into The Spiderverse (2018)" ? "1_2fTA_xH_9unyQNk5DsQbg":
     selectedMovieTitle === "Spider-Man: Far from Home" ? "11SRVVV1I8svGD4ObIcm3pA ":
     selectedMovieTitle === "Spider-Man: No Way Home" ? "1EO4aeHexZ93lHWgl634R1A":
     selectedMovieTitle === "Venom" ? "1n45uMbFwIb6O7NJQhTOTAQ ":
     selectedMovieTitle === "Venom: Let There Be Carnage" ? "1TvWhBKbfLPUXD65ug8OhiA":
     selectedMovieTitle === "Barbie" ? "1aNjpjujcVZvmvMQw1DE1Ng":
     selectedMovieTitle === "365 Days" ? "12XfktoLJVZJnKMKpHHkWmQ":
     selectedMovieTitle === "Fifty Shades of Grey" ? "1gSWhzb3y_aA4CEuhV206Dw":
     selectedMovieTitle === "Fifty Shades Darker" ? "1JxTETHEVyUac1MNxwZ6a3A":
     selectedMovieTitle === "La La Land" ? "19IS4dqVvbXMNwcw6-0XElQ ":
     selectedMovieTitle === "The Shawshank Redemption" ? "1RI4y42EFcgOIv0dHSIRMww":
     selectedMovieTitle === "Funny People" ? "1sLL0Q4z0EpEC0TNStHm_3w ":
     selectedMovieTitle === "The Fast and the Furious: Tokyo Drift" ? "16gFJWi2zQehxRKRczvk-UA":
     selectedMovieTitle === "Fast & Furious Presents: Hobbs & Shaw" ? "1ItSrrM1prbi11LUgOP6QZg":
     selectedMovieTitle === "F9: The Fast Saga" ? "13978aCtpss-WA5FhLe6h8w":
     selectedMovieTitle === "Harry Potter and the Sorcerer's Stone (2001)" ? "1hkjJDQ_nLRT8SmPmqp-pwQ":
     selectedMovieTitle === "Harry Potter and the Chamber of Secrets" ? "1JsPVnfmh_uOy9p7yF2iFCQ":
     selectedMovieTitle === "Harry Potter and the Prisoner of Azkaban (2004)" ? "1Z7qamehNCeX7B08_5kv8tA":
     selectedMovieTitle === "Harry Potter and the Goblet of Fire (2005)" ? "1K4Y7zAnNhIQZNiGNasdykw":
     selectedMovieTitle === "Harry Potter and the Order of the Phoenix" ? "1LwjM7KHjl7XddoO52Ve0wg":
     selectedMovieTitle === "Harry Potter and the Half-Blood Prince" ? "1W9RBu025z5Lf6APiEMnT8w":
     selectedMovieTitle === "Harry Potter and the Deathly Hallows Part 1 (2010)" ? "15gv7r9ZqTI38hs6l-Wj35A ":
     selectedMovieTitle === "Harry Potter and the Deathly Hallows Part 1 (2010) and Part 2 (2011) Featuring Brizzy Voices" ? "1wBHEvugllhvnhz8YNlKNhw":
     selectedMovieTitle === "Eyes Wide Shut" ? "1gSwnxQJtWPu_64A0hWExaA":
     selectedMovieTitle === "Man of Steel" ? "1MOJA2DLsbY6Id4z6nxnzJQ ":
     selectedMovieTitle === "oppenheimer" ? "1_fXpCRqKRkN-_AetCXe7sw":
     selectedMovieTitle === "Fall" ? "1livG5BmQdab7g5tg_UKuEA ":
     selectedMovieTitle === "Fight Club" ? "1m2XdSg114QEPtuRooo_Upw":
     selectedMovieTitle === "3 Idiots" ? "1xkVcTN0Dy19qKW0pyFfbOQ":
     selectedMovieTitle === "Dangal" ? "1JX-r-JpivBYC8jrLq4sh5A":
     selectedMovieTitle === "M.S. Dhoni: The Untold Story" ? "1M73r8tqc_22ouogWfoBuAg":
     selectedMovieTitle === "Dune" ? "1TjFR-cdFGXyUk8HnPajfwQ":
     selectedMovieTitle === "American Beauty" ? "1r-OOyb8oAC5c6ak6O6TWkw":
     selectedMovieTitle === "Beauty and the Beast" ? "1r8u9PAa877Cbw2LRzjk_lQ":
     selectedMovieTitle === "Forrest Gump" ? "1zYxUlvu0FNV-AWzmMsWnWA":
     selectedMovieTitle === "The Girl with the Dragon Tattoo" ? "1DB-_ZXaccDspTkEfH8eJbA":
     selectedMovieTitle === "After We Fell" ? "102cuoeIJihKErZzUvc_Gyg":
     selectedMovieTitle === "Ford v Ferrari" ? "193qY3lfx-XR-vj_Hle_IaQ":
     selectedMovieTitle === "Five Nights at Freddy's 2" ? "1f39Peg2BIwvVpYQOl5RZWA":
     selectedMovieTitle === "Annabelle" ? "1clZDTt8b6f46rM9_Fb_8hw":
     selectedMovieTitle === "Annabelle: Creation" ? "1557WuhRDXCNGQKDMOARFXA":
     selectedMovieTitle === "Annabelle Comes Home" ? "1Y9JPmGEMqUfhyhg5bwFDnw ":
     selectedMovieTitle === "The Conjuring" ? "1DefuDGH9NBjLrtEs-Q5P4A":
     selectedMovieTitle === "The Conjuring 2" ? "1AgIch0FRIgeKb4ICcOpgvQ":
     selectedMovieTitle === "The Conjuring: The Devil Made Me Do It" ? "194gDM2lv6h97hdBtrkXkOA":
     selectedMovieTitle === "Elemental" ? "18Fp7zJTG2K3y4Z9g3Hl5xA":
     selectedMovieTitle === "M3GAN" ? "1BKgRUjNNzPHlyITDQHhSPw":
     selectedMovieTitle === "Avatar" ? "1yqsaOxKFUt6QmCQ3JtvSyA":
     selectedMovieTitle === "Avatar: The Way of Water" ? "1jHKM4MfFZqT0tvwXZ04q9w":
     selectedMovieTitle === "Extraction II" ? "1Cn-tkO5FOBewYk3-oN7BNQ":
     selectedMovieTitle === "My Fault" ? "1yxsLTb_ZKZ5rLAqnF6gNXg":
     selectedMovieTitle === "Bridge to Terabithia" ? "1AXY4tNU9B1kM95ku-SfYyQ":
     selectedMovieTitle === "Blade Runner 2049" ? "1g0dZmM0HuNLGsqzvblrVQw":
     selectedMovieTitle === "Tenet" ? "13DHoVeASmxqI-2EA4pbBXQ":
     selectedMovieTitle === "Enola Holmes 2" ? "1J5cINEJKFQqNawSbWc4-jA":
     selectedMovieTitle === "Enola Holmes" ? "1xGcM8ZWxzJ9960C-gsjsQg":
     selectedMovieTitle === "Mission: Impossible - Dead Reckoning Part One" ? "121y_x2NPKPmfKXxkIxxcDQ":
     selectedMovieTitle === "Jurassic World: Fallen Kingdom" ? "1WI5XllOiRdG3MO9YxuyTTQ":
     selectedMovieTitle === "Jurassic World" ? "1MdMXQ6UvicZE1lj6Ptt4NQ":
     selectedMovieTitle === "Jurassic World Dominion" ? "1TuZ0tX4_h6e9cUim1PmSNQ":
     selectedMovieTitle === "Basic Instinct" ? "1r63IQr-bfgWWKAWIASMmbQ ":
     selectedMovieTitle === "Basic Instinct 2" ? "1VC2MugMkJeP0EKOuXZ56lg":
     selectedMovieTitle === "Mission: Impossible - Ghost Protocol" ? "1ti8oJ3HaPPttnwccTgHJog":
     selectedMovieTitle === "Mission: Impossible - Rogue Nation" ? "1CqATS6VjeYErfuZW91P5Pg":
     selectedMovieTitle === "Mission: Impossible - Fallout" ? "1kUgndKmlD4XAohEau-7wnA":
     selectedMovieTitle === "Kaala Paani" ? "1bs4Qyg6t2PVMK2zsg9iIZg":
     selectedMovieTitle === "The Monkey King" ? "1JUqS92X_EPu3hqzentQKRg":
     selectedMovieTitle === "Insidious" ? "1vGhdb6pdZg4x5x2Oia6WDQ":
     selectedMovieTitle === "Insidious: Chapter 2" ? "1OHwko42gi8TGkzsRKLNyQw":
     selectedMovieTitle === "Insidious: Chapter 3" ? "1YmOdDPcOUOuYGj3Z7IS3BQ":
     selectedMovieTitle === "Aakhri Sach" ? "1GegWNIsJ-C-AIK4rgmvbUQ":
     selectedMovieTitle === "Pathaan" ? "1viGU8z_3ZPkV05TXh71ebg":
     selectedMovieTitle === "Tiger 3" ? "1cJs45_M9XxqIoaL24NvTTg":
     selectedMovieTitle === "Jawan" ? "16HwOUiZE19sEKPF1JHbznQ":
     selectedMovieTitle === "Jailer" ? "1bVTyu8plKM0PxrovL38ZQQ":
     selectedMovieTitle === "Dream Girl 2" ? "1usjPlY05XSscwy9E8e8fVQ":
     selectedMovieTitle === "Gadar 2" ? "1PjqzvqEKzb5v5CpfGTj0_w":
     selectedMovieTitle === "OMG 2" ? "1ORZQNMTflzEmpKQnpZ4IcA":
     selectedMovieTitle === "Chor Nikal Ke Bhaga" ? "1QkZcjmaKsEktOiZ4c7h4ow":
     selectedMovieTitle === "Uncharted" ? "1zZSndhckTvwteyW3e8vi1A":
     selectedMovieTitle === "Moon Knight" ? "1GlD3U7YqqkTylxuC_e6UNg":
     selectedMovieTitle === "RRR" ? "1KFqtZHYQjGKsVkihjSLbNg":
     selectedMovieTitle === "Darlings" ? "1wv0TuORSQGDHdBhF0miqWg":
     selectedMovieTitle === "Satyaprem Ki Katha" ? "1GwHjOetzZkF358i-apz9eg":
     selectedMovieTitle === "Sita Ramam" ? "1ghcEy4yrpapdOGhCkm_jyA":
     selectedMovieTitle === "Farzi" ? "1BO3tyR596mn989h-IhuC6Q":
     selectedMovieTitle === "Drishyam 2" ? "11qtmVMrl-fgF_HUnbhUNMA":
     selectedMovieTitle === "Obsession" ? "1YRGtVUPu2zVX2x3bzFCEEQ":
     selectedMovieTitle === "Titanic" ? "1KUmik42UYeyoCPQe5LZFpw":
     selectedMovieTitle === "Friends with Benefits" ? "14nG9msbihMMthRvCIVzxQQ":
     selectedMovieTitle === "Cobweb" ? "12DNKZzN71qqiqGk-syEEew":
     selectedMovieTitle === "The Nun II" ? "1wQFvsBGQjJI-fuu7DD5M4A":
     selectedMovieTitle === "The Nun" ? "1nRgLzawWUX05hIaxE3mhag":
     selectedMovieTitle === "Stranger Things" ? "1c2iT3TW4ghUKcX6UdzpIHQ":
     selectedMovieTitle === "Loki" ? "1yze2Lp1yzG7rKDbD9Lr9Fg":
     selectedMovieTitle === "Scam 1992: The Harshad Mehta Story" ? "1XVFYjShVqlIcLRgrkgkhBQ":
     selectedMovieTitle === "Money Heist" ? "11E-NZeFgw9HFzOt3bYh63Q":
     selectedMovieTitle === "Mirzapur" ? "1-6seb1SvFYsrElxLpzhQ4w":
     selectedMovieTitle === "The Family Man" ? "1GkN3y1b-ECIsLGL7Adr5Gg":
     selectedMovieTitle === "The Girl on the Train" ? "1OJHTx7BpKCIr1Os8ObeiHg":
     selectedMovieTitle === "Breaking Bad" ? "1v8lu0WmsRP6sCOlHwn_GsQ":
     selectedMovieTitle === "Vikings" ? "1EBtpdPgg79lyapyoKzbxDA":
     selectedMovieTitle === "The Witcher" ? "1edLXzZzYGcEju8SafXkS7Q":
     selectedMovieTitle === "No Country for Old Men" ? "1dK55C1tLPb1zceWut4_W5A":
     selectedMovieTitle === "500 Days of Summer" ? "1TP-5RTI7hBe7-w26qmiohw":
     selectedMovieTitle === "Train to Busan" ? "1ZAFU7DWTylgYiHp83cfITA":
     selectedMovieTitle === "Peninsula" ? "1A0Myag-9c2A1Z9ulT6J1qw":
     selectedMovieTitle === "" ? "":undefined);
     

         
}, [selectedMovieTitle]);


useEffect(() => {
  console.log(selectedtrailertitle)
   seteTr(selectedtrailertitle === "Batman Begins" ? "neY2xVmOfUM" :
   selectedtrailertitle === "Batman v Superman: Dawn of Justice" ? "0WWzgGyAH6Y":
   selectedtrailertitle === "The Batman" ? "mqqft2x_Aa4":
   selectedtrailertitle === "Batman v Superman: Dawn of Justice (Ultimate Edition)" ? "gghDpyxwAeY":
   selectedtrailertitle === "The Dark Knight" ? "kmJLuwP3MbY":
   selectedtrailertitle === "The Dark Knight Rises" ? "ay-Xg1oTeAs":
   selectedtrailertitle === "Inception" ? "YoHD9XEInc0":
   selectedtrailertitle === "Dune" ? "n9xhJrPXop4":
   selectedtrailertitle === "Interstellar" ? "zSWdZVtXT7E":
   selectedtrailertitle === "Dunkirk" ? "F-eMt3SrfFU":
   selectedtrailertitle === "Tenet" ? "LdOM0x0XDMo&t=12s":
   selectedtrailertitle === "Blade Runner 2049" ? "gCcx85zbxz4":
   selectedtrailertitle === "Drive" ? "CWX34ShfcsE":
   selectedtrailertitle === "Nightcrawler" ? "u1uP_8VJkDQ":
   selectedtrailertitle === "Joker" ? "zAGVQLHvwOY":
   selectedtrailertitle === "The Avengers" ? "eOrNdBpGMv8":
   selectedtrailertitle === "Avengers: Endgame" ? "TcMBFSGVi1c":
   selectedtrailertitle === "Avengers: Infinity War" ? "6ZfuNTqbHE8":
   selectedtrailertitle === "Fifty Shades of Grey" ? "SfZWFDs0LxA":
   selectedtrailertitle === "Fifty Shades Darker" ? "OItKvc13gws":
   selectedtrailertitle === "Fifty Shades Freed" ? "nJCc5HRPxYA":
   selectedtrailertitle === "The Girl Next Door" ? "fX0yxwpR8v8":
   selectedtrailertitle === "La La Land" ? "0pdqf4P9MB8":
   selectedtrailertitle === "Transformers" ? "itnqEauWQZM":
   selectedtrailertitle === "Transformers: The Last Knight" ? "v-4rYf0x-F4":
   selectedtrailertitle === "John Wick" ? "C0BMx-qxsP4":
   selectedtrailertitle === "John Wick: Chapter 4" ? "qEVUtrk8_B4":
   selectedtrailertitle === "John Wick: Chapter 2" ? "XGk2EfbD_Ps":
   selectedtrailertitle === "John Wick: Chapter 3 - Parabellum" ? "M7XM597XO94":
   selectedtrailertitle === "American Beauty" ? "Ly7rq5EsTC8":
   selectedtrailertitle === "Beauty and the Beast" ? "e3Nl_TCQXuw":
   selectedtrailertitle === "Fast X" ? "32RAq6JzY-w":
   selectedtrailertitle === "Mission: Impossible - Ghost Protocol" ? "EDGYVFZxsXQ":
   selectedtrailertitle === "The Wolf of Wall Street" ? "iszwuX1AK6A":
   selectedtrailertitle === "Shutter Island" ? "5iaYLCiq5RM":
   selectedtrailertitle === "American Psycho" ? "5YnGhW4UEhc":
   selectedtrailertitle === "Fight Club" ? "SUXWAEX2jlg":
   selectedtrailertitle === "Mission: Impossible - Rogue Nation" ? "gOW_azQbOjw":
   selectedtrailertitle === "Mission: Impossible - Dead Reckoning Part One" ? "avz06PDqDbM":
   selectedtrailertitle === "Mission: Impossible - Fallout" ? "wb49-oV0F78":
   selectedtrailertitle === "F9: The Fast Saga" ? "aSiDu3Ywi8E":
   selectedtrailertitle === "Fast & Furious Presents: Hobbs & Shaw" ? "HZ7PAyCDwEg":
   selectedtrailertitle === "The Fast and the Furious: Tokyo Drift" ? "p8HQ2JLlc4E":
   selectedtrailertitle === "Spider-Man: No Way Home" ? "JfVOs4VSpmA":
   selectedtrailertitle === "Spider-Man: Across the Spider-Verse" ? "shW9i6k8cB0":
   selectedtrailertitle === "Barbie" ? "pBk4NYhWNMM":
   selectedtrailertitle === "3 Idiots" ? "K0eDlFX9GMc":
   selectedtrailertitle === "Dangal" ? "x_7YlGv9u1g":
   selectedtrailertitle === "RRR" ? "f_vbAtFSEc0":
   selectedtrailertitle === "M.S. Dhoni: The Untold Story" ? "8ksr1tuV0B0":
   selectedtrailertitle === "The Voyeurs" ? "_fiCdELSwwI":
   selectedtrailertitle === "The Social Network" ? "lB95KLmpLR4":
   selectedtrailertitle === "Avengers: Age of Ultron" ? "tmeOjFno6Do":
   selectedtrailertitle === "Ananse: Spider Man 1" ? "t06RUxPbp_c":
   selectedtrailertitle === "Spider-Man 2" ? "1s9Yln0YwCw":
   selectedtrailertitle === "Spider-Man: Far from Home" ? "Nt9L1jCKGnE":
   selectedtrailertitle === "Spider-Man: Into The Spiderverse (2018)" ? "g4Hbz2jLxvQ":
   selectedtrailertitle === "Venom" ? "u9Mv98Gr5pY":
   selectedtrailertitle === "Venom: Let There Be Carnage" ? "-ezfi6FQ8Ds":
   selectedtrailertitle === "365 Days" ? "aXtNikiU9lo":
   selectedtrailertitle === "The Shawshank Redemption" ? "PLl99DlL6b4":
   selectedtrailertitle === "Funny People" ? "kzciY15Q3BA":
   selectedtrailertitle === "Harry Potter and the Sorcerer's Stone (2001)" ? "VyHV0BRtdxo":
   selectedtrailertitle === "Harry Potter and the Chamber of Secrets" ? "VjN5_mB7KFs":
   selectedtrailertitle === "Harry Potter and the Prisoner of Azkaban (2004)" ? "MjoMN9RMKAY":
   selectedtrailertitle === "Harry Potter and the Order of the Phoenix" ? "-ok_8UuFZ4Y":
   selectedtrailertitle === "Harry Potter and the Half-Blood Prince" ? "JYLdTuL9Wjw":
   selectedtrailertitle === "Harry Potter and the Goblet of Fire (2005)" ? "3EGojp4Hh6I":
   selectedtrailertitle === "Harry Potter and the Deathly Hallows Part 1 (2010)" ? "MxqsmsA8y5k":
   selectedtrailertitle === "Harry Potter and the Deathly Hallows Part 1 (2010) and Part 2 (2011) Featuring Brizzy Voices" ? "lJ83ILGA8yI":
   selectedtrailertitle === "Eyes Wide Shut" ? "FBrbQSDfh7Q":
   selectedtrailertitle === "Man of Steel" ? "KVu3gS7iJu4":
   selectedtrailertitle === "Fall" ? "iSspRSGc4Dk":
   selectedtrailertitle === "Forrest Gump" ? "uPIEn0M8su0":
   selectedtrailertitle === "The Girl with the Dragon Tattoo" ? "DqQe3OrsMKI&t=28s":
   selectedtrailertitle === "After We Fell" ? "3OHPCurXcTU":
   selectedtrailertitle === "Ford v Ferrari" ? "I3h9Z89U9ZA":
   selectedtrailertitle === "Five Nights at Freddy's 2" ? "Z_T0o5uNrlY":
   selectedtrailertitle === "Annabelle" ? "paFgQNPGlsg":
   selectedtrailertitle === "Annabelle: Creation" ? "KisPhy7T__Q":
   selectedtrailertitle === "Annabelle Comes Home" ? "bCxm7cTpBAs":
   selectedtrailertitle === "The Conjuring" ? "k10ETZ41q5o":
   selectedtrailertitle === "The Conjuring 2" ? "VFsmuRPClr4":
   selectedtrailertitle === "The Conjuring: The Devil Made Me Do It" ? "h9Q4zZS2v1k":
   selectedtrailertitle === "Elemental" ? "DwuJeGYlYyw":
   selectedtrailertitle === "M3GAN" ? "BRb4U99OU80":
   selectedtrailertitle === "Avatar" ? "waJKJW_XU90":
   selectedtrailertitle === "Extraction II" ? "Y274jZs5s7s":
   selectedtrailertitle === "My Fault" ? "3CpKBAPqqM0":
   selectedtrailertitle === "Bridge to Terabithia" ? "T2TDSEG57hI":
   selectedtrailertitle === "Enola Holmes 2" ? "KKXNmYoPkx0":
   selectedtrailertitle === "Enola Holmes" ? "1d0Zf9sXlHk":
   selectedtrailertitle === "Avatar: The Way of Water" ? "a8Gx8wiNbs8":
   selectedtrailertitle === "oppenheimer" ? "uYPbbksJxIg":
   selectedtrailertitle === "Jurassic World: Fallen Kingdom" ? "vn9mMeWcgoM":
   selectedtrailertitle === "Jurassic World" ? "RFinNxS5KN4":
   selectedtrailertitle === "Jurassic World Dominion" ? "fb5ELWi-ekk":
   selectedtrailertitle === "Basic Instinct" ? "EhRhuJOJkGg":
   selectedtrailertitle === "Basic Instinct 2" ? "CsK82mWFLZM":
   selectedtrailertitle === "Kaala Paani" ? "":
   selectedtrailertitle === "The Monkey King" ? "":
   selectedtrailertitle === "Insidious" ? "":
   selectedtrailertitle === "Insidious: Chapter 2" ? "":
   selectedtrailertitle === "Insidious: Chapter 3" ? "":
   selectedtrailertitle === "Aakhri Sach" ? "":
   selectedtrailertitle === "Pathaan" ? "":
   selectedtrailertitle === "Tiger 3" ? "":
   selectedtrailertitle === "Jawan" ? "":
   selectedtrailertitle === "Jailer" ? "":
   selectedtrailertitle === "Dream Girl 2" ? "":
   selectedtrailertitle === "Gadar 2" ? "":
   selectedtrailertitle === "OMG 2" ? "":
   selectedtrailertitle === "Chor Nikal Ke Bhaga" ? "":
   selectedtrailertitle === "Uncharted" ? "":
   selectedtrailertitle === "Darlings" ? "":
   selectedtrailertitle === "Sita Ramam" ? "":
   selectedtrailertitle === "Farzi" ? "":
   selectedtrailertitle === "Satyaprem Ki Katha" ? "":
   selectedtrailertitle === "Drishyam 2" ? "":
   selectedtrailertitle === "Obsession" ? "":
   selectedtrailertitle === "Titanic" ? "":
   selectedtrailertitle === "Friends with Benefits" ? "":
   selectedtrailertitle === "Cobweb" ? "":
   selectedtrailertitle === "The Nun II" ? "":
   selectedtrailertitle === "The Nun" ? "":
   selectedtrailertitle === "Stranger Things" ? "":
   selectedtrailertitle === "" ? "":
   selectedtrailertitle === "" ? "":
   selectedtrailertitle === "" ? "":
   selectedtrailertitle === "" ? "":
   selectedtrailertitle === "" ? "":
   selectedtrailertitle === "" ? "":
   selectedtrailertitle === "" ? "":undefined);
   
       
}, [selectedtrailertitle]);
  

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };  
  
  const currentmovie=(title)=>{ 
   setSelectedMovieTitle(title)
  };

  const currenttrailer=(title)=>{
    setselectedtrailertitle(title)
  };

 useEffect(() => {
    if (eTv) {
      window.open(Tv + eTv, "_blank", "noopener noreferrer");
    }
  }, [eTv]);
    

  useEffect(() => {
    if (eTr) {
      window.open(Tr + eTr, "_blank", "noopener noreferrer");
    }
  }, [eTr]);

  useEffect(()=> {
    document.title="Crash-free movies"
  },[]);
   
      return (

        <div classname="about">
           <img
           src={aboutIcon}
           alt="about"
           style={{ 
           position:'absolute',
           top:'0',
           right:'0'}}
           onClick={()=>(
            window.alert("-------Watch Movies & Enjoy---------                                           Download Terabox to watch movies                                               Backup Telegram https://t.me/+4ubTz-CWyDw3Yjg1")
            )}  
           />
          




           <img
           src={favIcon}
           alt="fav"
           style={{ width:'60px',
           position:'absolute',
           top:'24px',
           left:'15px',}} 
           onClick={()=>alert ("------Favourite  movies------              ")}
           ></img>
         
        <div className="app">
          <h1>Crash</h1>
          
          
    
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
    
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <div className="play" style={{ margin: '25px',
                backgroundColor: '#1f2123',
                borderRadius: '25px',
                padding: '1px', 
                WebkitBoxShadow: '5px 5px 7px #1c1d1f, -5px -5px 7px #222527',
                boxShadow: '5px 5px 7px #1c1d1f, -5px -5px 7px #222527'
                }}>

                <MovieCard movie={movie} />
                 
                <img
                src={playIcon}
                style={{marginLeft:'76px'}}
                alt="play"
                onClick={() => {
                  currentmovie(movie.Title);
                                     
                 }
                }/>
                <img
                src={trailerIcon}
                style={{width:'150px',marginLeft:'10px'}}
                alt="trailer"
                onClick={() => { 
                  currenttrailer(movie.Title);

                 }
                }/>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div> </div>

   
      );
    };

export default App;