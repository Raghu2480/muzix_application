package com.niit.favouroitemovieservice.controller;

import com.niit.favouroitemovieservice.domain.Favourite;
import com.niit.favouroitemovieservice.exception.MovieAlreadyExistsException;
import com.niit.favouroitemovieservice.exception.MovieNotFoundException;
import com.niit.favouroitemovieservice.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v4/")
public class FavouriteController {
    private FavouriteService favouriteService;
    private ResponseEntity<?> responseEntity;
    @Autowired
    public FavouriteController(FavouriteService favouriteService) {
        this.favouriteService = favouriteService;
    }
    @PostMapping("/favourite")
    public ResponseEntity<?> saveFavourite(@RequestBody Favourite favourite) throws MovieAlreadyExistsException {
        return new ResponseEntity<>(favouriteService.saveFavourite(favourite), HttpStatus.CREATED);
    }
    @GetMapping("favourite/{email}")
    public ResponseEntity<?> getFavouriteMoviesByEmail(@PathVariable String email) throws Exception
    {
        return new ResponseEntity<>(favouriteService.findMoviesByEmail(email),HttpStatus.OK);
    }

    @DeleteMapping("/deleteFavourite/{movieId}/{email}")
    public ResponseEntity<?> deleteMovieFromFavourites(@PathVariable String movieId,@PathVariable String email) throws MovieNotFoundException
    {
        try
        {
           favouriteService.deleteMovieFromFavourites(movieId,email);
           responseEntity=new ResponseEntity<>(HttpStatus.OK);
        }
        catch(MovieNotFoundException e){
            throw new MovieNotFoundException();
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity("Error !!! Try after sometime.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        System.out.println("message");
        System.out.println(responseEntity);
        return responseEntity;
    }

}
