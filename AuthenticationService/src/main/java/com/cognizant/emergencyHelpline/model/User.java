package com.cognizant.emergencyHelpline.model;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.cognizant.emergencyHelpline.dto.UserDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Users")
public class User {

	@Id ObjectId databaseId;
    private long id;    
    private String username;
    private String password;
    private String name;
    private String roles;
    private Date lastUpdatedTime;

    public UserDto toUserDto(){
        UserDto userDto = new UserDto();
        userDto.setId(this.id);        
        userDto.setName(this.name);        
        userDto.setUsername(this.username);
        userDto.setPassword(this.password);
        userDto.setRoles(this.roles);
        return userDto;
    }
}
