<?php
declare(strict_types=1);

// Freetestapi SDK utility: result_headers

class FreetestapiResultHeaders
{
    public static function call(FreetestapiContext $ctx): ?FreetestapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
