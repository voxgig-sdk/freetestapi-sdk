<?php
declare(strict_types=1);

// Freetestapi SDK utility: result_body

class FreetestapiResultBody
{
    public static function call(FreetestapiContext $ctx): ?FreetestapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
