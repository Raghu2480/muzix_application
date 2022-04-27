package com.niit.MovieService.repository;

import com.niit.MovieService.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMovieRepository extends MongoRepository<User,String> {
}
