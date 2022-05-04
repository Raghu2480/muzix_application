package com.niit.service;

import com.niit.domain.User;
//import com.niit.MovieService.exception.UserAlreadyExistsException;
//import com.niit.MovieService.proxy.UserProxy;
//import com.niit.MovieService.repository.UserMovieRepository;
import com.niit.exception.UserAlreadyExistsException;
import com.niit.exception.UserNotFoundException;
import com.niit.proxy.UserProxy;
import com.niit.repository.UserMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserMovieServiceImpl implements UserMovieService{
    private UserMovieRepository userMovieRepository;
    private UserProxy userProxy;

    @Autowired
    public UserMovieServiceImpl(UserMovieRepository userMovieRepository, UserProxy userProxy) {
        this.userMovieRepository = userMovieRepository;
        this.userProxy = userProxy;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        if(userMovieRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExistsException();
        }
        ResponseEntity responseEntity=userProxy.saveUser(user);
        System.out.println(responseEntity.getBody());
        return userMovieRepository.save(user);
    }

    @Override
    public Optional<User> getUserByEmail(String email) throws UserNotFoundException {
        if(userMovieRepository.findById(email).isEmpty())
        {
            throw new UserNotFoundException();
        }
        return userMovieRepository.findById(email);
    }


}
