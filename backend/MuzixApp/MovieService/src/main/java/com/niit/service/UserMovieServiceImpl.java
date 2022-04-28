package com.niit.service;

import com.niit.domain.User;
//import com.niit.MovieService.exception.UserAlreadyExistsException;
//import com.niit.MovieService.proxy.UserProxy;
//import com.niit.MovieService.repository.UserMovieRepository;
import com.niit.exception.UserAlreadyExistsException;
import com.niit.repository.UserMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserMovieServiceImpl implements UserMovieService{
    private UserMovieRepository userMovieRepository;
//    private UserProxy userProxy;

    @Autowired
    public UserMovieServiceImpl(UserMovieRepository userMovieRepository) {
        this.userMovieRepository = userMovieRepository;
//        this.userProxy = userProxy;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        if(userMovieRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExistsException();
        }
//        ResponseEntity responseEntity=userProxy.saveUser(user);
//        System.out.println(responseEntity.getBody());
        return userMovieRepository.save(user);
    }

//    @Override
//    public User saveUserMovieToList(Movie movie, String email) throws UserNotFoundException {
//        if(userMovieRepository.findById(email).isEmpty())
//        {
//            throw new UserNotFoundException();
//        }
//        User user = userMovieRepository.findByEmail(email);
//        if(user.getMovieList() == null)
//        {
//            user.setMovieList(Arrays.asList(movie));
//        }
//        else {
//            List<Movie> movies = user.getMovieList();
//            movies.add(movie);
//            user.setMovieList(movies);
//        }
//        return userMovieRepository.save(user);
//    }
//
//    @Override
//    public User deleteUserMovieFromList(String email, String movieId) throws UserNotFoundException, MovieNotFoundException {
//        boolean movieIdIsPresent = false;
//        if(userMovieRepository.findById(email).isEmpty())
//        {
//            throw new UserNotFoundException();
//        }
//        User user = userMovieRepository.findById(email).get();
//        List<Movie> movies = user.getMovieList();
//        movieIdIsPresent = movies.removeIf(x->x.getMovieId().equals(movieId));
//        if(!movieIdIsPresent)
//        {
//            throw new MovieNotFoundException();
//        }
//        user.setMovieList(movies);
//        return userMovieRepository.save(user);
//    }

//    @Override
//    public List<Movie> getAllMovies() throws MovieNotFoundException {
//        return null;
//    }
}
