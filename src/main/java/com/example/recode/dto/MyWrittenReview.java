package com.example.recode.dto;

import com.example.recode.domain.Review;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class MyWrittenReview {

    private long reviewId;
    private String productName;
    private String reviewTitle;
    private String reviewContent;
    private LocalDateTime reviewCreateDate;
    private int reviewScore;
    private int reviewViews;
    private String reviewRepImg;

    @Builder
    public MyWrittenReview(Review review, String productName, String reviewRepImg) {
        this.reviewId = review.getReviewId();
        this.productName = productName;
        this.reviewTitle = review.getReviewTitle();
        this.reviewContent = review.getReviewTitle();
        this.reviewCreateDate = review.getReviewCreateDate();
        this.reviewScore = review.getReviewScore();
        this.reviewViews = review.getReviewViews();
        this.reviewRepImg = reviewRepImg;
    }
}
