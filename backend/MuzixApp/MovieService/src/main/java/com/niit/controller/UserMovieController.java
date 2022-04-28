package com.niit.controller;

import com.niit.domain.User;
import com.niit.exception.UserAlreadyExistsException;
import com.niit.service.UserMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v2")
public class UserMovieController {
    private UserMovieService userMovieService;
    private ResponseEntity<?> responseEntity;

    @Autowired
    public UserMovieController(UserMovieService userMovieService) {
        this.userMovieService = userMovieService;
//        this.responseEntity = responseEntity;
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            responseEntity =  new ResponseEntity<>(userMovieService.registerUser(user), HttpStatus.CREATED);
        }
        catch(UserAlreadyExistsException e)
        {
            throw new UserAlreadyExistsException();
        }
        return responseEntity;
    }
}
