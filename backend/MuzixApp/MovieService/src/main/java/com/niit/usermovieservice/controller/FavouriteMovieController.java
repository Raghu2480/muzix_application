package com.niit.usermovieservice.controller;

import com.niit.usermovieservice.domain.FavouriteMovie;
import com.niit.usermovieservice.exception.MovieAlreadyExistsException;
import com.niit.usermovieservice.service.FavouriteMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v3/")
@CrossOrigin
public class FavouriteMovieController {

    private FavouriteMovieService favouriteMovieService;
    private ResponseEntity<?> responseEntity;

    @Autowired
    public FavouriteMovieController(FavouriteMovieService favouriteMovieService) {
        this.favouriteMovieService = favouriteMovieService;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public ResponseEntity<?> registerFavourite(@RequestBody FavouriteMovie favouriteMovie) throws MovieAlreadyExistsException {
        try {
            responseEntity =  new ResponseEntity<>(favouriteMovieService.registerFavourite(favouriteMovie), HttpStatus.CREATED);
        }
        catch(MovieAlreadyExistsException e)
        {
            throw new MovieAlreadyExistsException();
        }
        return responseEntity;
    }
}