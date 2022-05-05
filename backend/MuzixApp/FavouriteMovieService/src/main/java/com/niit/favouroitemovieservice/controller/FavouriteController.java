package com.niit.favouroitemovieservice.controller;

import com.niit.favouroitemovieservice.domain.Favourite;
import com.niit.favouroitemovieservice.exception.MovieAlreadyExistsException;
import com.niit.favouroitemovieservice.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@CrossOrigin
@RestController
@RequestMapping("/api/v4/")
public class FavouriteController {
    private FavouriteService favouriteService;

    @Autowired
    public FavouriteController(FavouriteService favouriteService) {
        this.favouriteService = favouriteService;
    }
    @PostMapping("/favourite")
    public ResponseEntity<?> saveFavourite(@RequestBody Favourite favourite) throws MovieAlreadyExistsException {
        return new ResponseEntity<>(favouriteService.saveFavourite(favourite), HttpStatus.CREATED);
    }
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody Favourite favourite) throws MovieAlreadyExistsException
//    {
//        Favourite favourite1 = favouriteService.findByMovieId(favourite.getEmail());
////
////        if(favourite1==null)
////        {
////            throw new MovieAlreadyExistsException();
////        }
////        Map<String,String> map = securityTokenGenerator.generateToken(user);
//        return new ResponseEntity<>(favourite1,HttpStatus.OK);
//    }
    @GetMapping("favourite/{email}")
    public ResponseEntity<?> getFavouriteMoviesByEmail(@PathVariable String email) throws Exception
    {
        return new ResponseEntity<>(favouriteService.findMoviesByEmail(email),HttpStatus.OK);
    }

}
