import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandler;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.LinkedList;

/**
 * This is an abstract class for the students in CS 2163
 * at the Oklahoma City Community College. It implements
 * an abstract dictionary class that is meant to be ext-
 * ended to prace extending abstract classes.
 *
 * @author Tashfeen, Ahmad
 */
public abstract class Dictionary {
    /**
     * Prints out the word definitions in a nicely
     * wrapped enumerated tabulation. Note that when
     * a method is private, the sub classes can not
     * access it.
     *
     * @param word The word to print the possible definitions of.
     */
    public abstract void printFormattedDefinitions(String word);

    /**
     * Approximately wrap the text at the specified width.
     *
     * @param text The text string to transform into wrapped text.
     * @param hanging The hanging indent for the wrapped lines.
     * @param width The width parameter at which to wrap.
     * @return String The wrapped text. 
     */
    public abstract String wrap(String text, String hanging, int width);

    /**
     * This method is used to make the HTTP GET
     * call. We are using the Free Dictionary API,
     * https://dictionaryapi.dev/.
     *
     * @param word The word to append to the request URL and define.
     * @return String[] All definitions returned by the API.
     */
    public String[] definitions(String word) {
        word = word.replace(" ", "%20");
        String url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
        return this.parseResponseBody(this.httpGet(url + word));
    }

    /**
     * Make an HTTP GET call.
     *
     * @param url Request URL.
     * @return String The response body of the GET request.
     */
    private String httpGet(String url) {
        String body = null;
        try {
            URI uri = URI.create(url);
            HttpClient cl = HttpClient.newHttpClient();
            HttpRequest req = HttpRequest.newBuilder().uri(uri).build();
            BodyHandler<String> string = BodyHandlers.ofString();
            HttpResponse<String> response = cl.send(req, string);
            body = response.body();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return body;
    }

    /**
     * Parse the response body of the GET request
     * into definition strings. The definitions are
     * of the word the or phrase the user inputted.
     *
     * @param body JSON response body from the dictionary API.
     * @return String[] Definitions in the body.
     */
    private String[] parseResponseBody(String body) {
        String prefix = "\"definition\":\"";
        int i = body.indexOf(prefix);
        LinkedList<String> definitions = new LinkedList<String>();
        while (i >= 0) {
            body = body.substring(body.indexOf(prefix) + prefix.length());
            definitions.add(body.substring(0, body.indexOf("\",\"")));
            i = body.indexOf(prefix);
        }
        return definitions.toArray(new String[0]);
    }
}