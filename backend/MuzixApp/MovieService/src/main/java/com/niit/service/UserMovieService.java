package com.niit.service;

import com.niit.domain.User;
//import com.niit.MovieService.exception.UserAlreadyExistsException;
import com.niit.exception.UserAlreadyExistsException;
import org.springframework.stereotype.Service;

@Service
public interface UserMovieService {
    User registerUser(User user) throws UserAlreadyExistsException;
//    User saveUserMovieToList(Movie movie, String email) throws UserNotFoundException;
//    User deleteUserMovieFromList(String email,String movieId) throws UserNotFoundException, MovieNotFoundException;
//    List<Movie> getAllMovies() throws MovieNotFoundException;
}
