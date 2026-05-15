<?php
declare(strict_types=1);

// Freetestapi SDK utility: feature_add

class FreetestapiFeatureAdd
{
    public static function call(FreetestapiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
