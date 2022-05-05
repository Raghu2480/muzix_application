package com.niit.usermovieservice.service;

import com.niit.rabbitmq.domain.FavouriteDTO;
import com.niit.usermovieservice.config.Producer;
import com.niit.usermovieservice.domain.FavouriteMovie;
import com.niit.usermovieservice.exception.MovieAlreadyExistsException;
import com.niit.usermovieservice.repository.FavouriteMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavouriteMovieServiceImpl implements FavouriteMovieService{

    private FavouriteMovieRepository favouriteMovieRepository;
    @Autowired
    Producer producer;
    @Autowired
    public FavouriteMovieServiceImpl(FavouriteMovieRepository favouriteMovieRepository) {
        this.favouriteMovieRepository = favouriteMovieRepository;
    }

    @Override
    public FavouriteMovie registerFavourite(FavouriteMovie favouriteMovie) throws MovieAlreadyExistsException {
        FavouriteDTO favouriteDTO=new FavouriteDTO();
        favouriteDTO.setMovieId(favouriteMovie.getMovieId());
        favouriteDTO.setMovieName(favouriteMovie.getMovieName());
        favouriteDTO.setEmail(favouriteMovie.getEmail());
        if(favouriteMovieRepository.findById(favouriteMovie.getMovieId()).isPresent())
        {
            throw new MovieAlreadyExistsException();
        }
        else{
            favouriteMovieRepository.save(favouriteMovie);
            System.out.println("saved user in mongo");
            producer.sendMessageToRabbitMq(favouriteDTO);
        }
        return favouriteMovie;
    }
}
