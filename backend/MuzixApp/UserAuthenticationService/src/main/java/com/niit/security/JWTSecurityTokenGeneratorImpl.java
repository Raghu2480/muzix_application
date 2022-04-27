//package com.niit.security;
//
//import com.niit.domain.User;
//import org.bouncycastle.jcajce.BCFKSLoadStoreParameter;
//import org.springframework.stereotype.Service;
//
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//@Service
//public class JWTSecurityTokenGeneratorImpl implements SecurityTokenGenerator {
////    public Map<String, String> generateToken(User user) {
////// multiple claims for a token - 3 types - registered, public, and private
//////        String jwtToken = Jwts.builder().setIssuer("ShopZone")
////                .setSubject(user.getEmail())
////                .setIssuedAt(new Date())
////                .signWith(BCFKSLoadStoreParameter.SignatureAlgorithm.HS256,"mysecret")
////                .compact();
////        Map<String,String> map = new HashMap<>();
////        map.put("token",jwtToken);
////        map.put("message","Authentication Successful");
////        return map;
////    }
//}
