package com.niit.favouroitemovieservice.service;

import com.niit.favouroitemovieservice.domain.Favourite;
import com.niit.favouroitemovieservice.exception.MovieAlreadyExistsException;
import com.niit.favouroitemovieservice.repository.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavouriteServiceImpl implements FavouriteService {
    private FavouriteRepository favouriteRepository;
    @Autowired
    public FavouriteServiceImpl(FavouriteRepository favouriteRepository) {
        this.favouriteRepository = favouriteRepository;
    }
    @Override
    public Favourite saveFavourite(Favourite favourite) throws MovieAlreadyExistsException {
        if(favouriteRepository.findById(favourite.getMovieId()).isPresent())
        {
            throw new MovieAlreadyExistsException();
        }
        System.out.println("-----------------------------------Favrite Movie Service----------------------------------------");
        System.out.println(favourite);
        return favouriteRepository.save(favourite);
    }
    @Override
    public Favourite findByMovieId(String movieId){
        System.out.println("movieId"+movieId);
        Favourite favourite = favouriteRepository.findByMovieId(movieId);
        System.out.println(favourite);
//        if(favourite == null)
//        {
//            throw new MovieAlreadyExistsException();
//        }

        return favourite;
    }

    @Override
    public List<Favourite> findMoviesByEmail(String email) {

        return favouriteRepository.findAllMoviesByEmail(email);
    }
}
