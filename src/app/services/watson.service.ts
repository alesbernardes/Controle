import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface WatsonSentimentAnalysis {
  // Define the structure of the expected response from the API
}

@Injectable({
  providedIn: 'root'
})
export class WatsonService {
  private apiUrl = 'https://api.us-south.tone-analyzer.cloud.ibm.com/v3/tone';
  private apiKey = 'your-api-key'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  analyzeSentiment(text: string): Observable<WatsonSentimentAnalysis> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}` // Use template literal for cleaner string interpolation
    });

    const body = {
      text,
    };

    return this.http.post<WatsonSentimentAnalysis>(this.apiUrl, body, { headers })
      .pipe(
        catchError(error => {
          console.error('Error analyzing sentiment:', error);
          // Handle errors gracefully, e.g., return a default sentiment object
          return of({ document_tone: { tones: [] } }); // Return empty tone object
        })
      );
  }
}

