package com.niit.usermovieservice.service;

import com.niit.usermovieservice.domain.FavouriteMovie;
import com.niit.usermovieservice.exception.MovieAlreadyExistsException;
//import org.springframework.stereotype.Service;


public interface FavouriteMovieService {
    FavouriteMovie registerFavourite(FavouriteMovie favouriteMovie) throws MovieAlreadyExistsException;

}
